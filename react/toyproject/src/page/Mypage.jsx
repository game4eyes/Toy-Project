import React from 'react';
import Footer from './Footer';
import './css/Mypage.css';
import { CiCreditCard1 } from "react-icons/ci";
import { BiPencil } from "react-icons/bi";
import { GoChevronRight } from "react-icons/go";
import { TbRestore } from "react-icons/tb";
import { GrDiamond } from "react-icons/gr";
import { GrCurrency } from "react-icons/gr";
import { GrNotes } from "react-icons/gr";
import { GoCreditCard } from "react-icons/go";
import { AiFillTag } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineApi } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { FiBell } from "react-icons/fi";
import { FiTrello } from "react-icons/fi";
import { FiLock } from "react-icons/fi";

function Mypage() {
    return (
        <div className='mypage-container'>
            <div className="mypage-menu-container">
                <div className='billingLine' >
                    <div className="billing-box">
                        <div>요금제</div>
                        <h2>Premium 개인</h2>
                        <p>다음 달에는 ! 에 KRW가 청구됩니다.</p>
                        <p>마지막 숫자가ㅁㅁㅁㅁ인 !! 카드</p>
                    </div>
                    <div className="profile-and-card-container">
                        <div className="edit-profile-box">
                            <BiPencil size={25}/>
                            <div>프로필 편집</div>
                        </div>
                        <div className="update-credit-card-box">
                            <CiCreditCard1 size={25} />
                            <h5>신용카드 업데이트</h5>
                        </div>
                    </div>
                </div>
                <div className='menu-item'>
                    <div>
                        <h4>계정</h4>
                        <slot><BiPencil />기본 콘텐츠 <GoChevronRight /></slot>
                        <slot><TbRestore />플레이리스트 복구하기 <GoChevronRight /></slot>
                    </div>
                    <div>
                        <h4>정액제</h4>
                        <slot><GrDiamond />이용 가능한 요금제 <GoChevronRight /></slot>
                        <slot><GrCurrency />요금제 관리하기 <GoChevronRight /></slot>
                    </div>
                    <div>
                        <h4>결제</h4>
                        <slot><GrNotes />주문 내역 <GoChevronRight /></slot>
                        <slot><GoCreditCard />저장된 결제카드 <GoChevronRight /></slot>
                        <slot><AiFillTag />사용하기 <GoChevronRight /></slot>
                    </div>
                    <div>
                        <h4>보안 및 개인정보 보호 <GoChevronRight /></h4>
                        <slot><AiOutlineBars />앱 관리 <GoChevronRight /></slot>
                        <slot><FiBell />알림설정 <GoChevronRight /></slot>
                        <slot><AiOutlineEye />개인정보 설정 <GoChevronRight /></slot>
                        <slot><FiTrello />로그인 방식 수정 <GoChevronRight /></slot>
                        <slot><FiLock />기기 비밀번호 설정하기 <GoChevronRight /></slot>
                        <slot><AiOutlineApi />어디서든 로그아웃하기 <GoChevronRight /></slot>
                    </div>
                    <div>
                        <h4>도움말</h4>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Mypage;