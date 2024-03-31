
import React, { useEffect } from 'react';

export async function redirectToAuthCodeFlow(clientId) {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:5173/callback");
    params.append("scope", "user-read-private user-read-email");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

const Script = () => {
    const clientId = "your-client-id-here"; // Replace with your client id
    const code = undefined;

    useEffect(() => {
        const fetchData = async () => {
            if (!code) {
                await redirectToAuthCodeFlow(clientId);
            } else {
                const accessToken = await getAccessToken(clientId, code);
                const profile = await fetchProfile(accessToken);
                populateUI(profile);
            }
        };

        fetchData();
    }, []);

    async function getAccessToken(clientId, code) {
        // TODO: Get access token for code
    }

    async function fetchProfile(token) {
        // TODO: Call Web API
    }

    function populateUI(profile) {
        // TODO: Update UI with profile data
    }

    return (
        <div>
            <h1>Display your Spotify profile data</h1>
            <section id="profile">
                <h2>Logged in as <span id="displayName"></span></h2>
                <span id="avatar"></span>
                <ul>
                    <li>User ID: <span id="id"></span></li>
                    <li>Email: <span id="email"></span></li>
                    <li>Spotify URI: <a id="uri" href="#"></a></li>
                    <li>Link: <a id="url" href="#"></a></li>
                    <li>Profile Image: <span id="imgUrl"></span></li>
                </ul>
            </section>
        </div>
    );
};

export default Script;