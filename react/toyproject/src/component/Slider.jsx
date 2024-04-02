import React, { useState } from 'react';
import './cpcss/Slider.css';


/**수정중 */
/**@todo_안쓰는라이브러리삭제 */
function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const products = [
        { id: 1, name: 'Product 1', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTdfMjM2%2FMDAxNzA4MTMyODQxNzAz.WxW7rkHfUc9uX_Ywom0FujOt6wDQnd09bc4iFzAVKeEg.bcTkFYxi_I4hEGmrqqrJPM7DYjPYKEYgD1M9lXsFpKAg.JPEG.dltlsqldid%2Fbandicam_2024-02-17_09-59-05-722.jpg&type=sc960_832' },
        { id: 2, name: 'Product 2', imageUrl: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.namu.wiki%2Fi%2FWuSCx3t1y0q7q5eAEtNRU5B-sRJQQ-tVm1kDHZ5Ao_UeAEK7MfpQIxT9XTrNgPzDi6ZyHrblTBy_0USnlxFdjQ.jpg&type=sc960_832' },
        { id: 3, name: 'Product 3', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzEwMTVfMjE2%2FMDAxNjk3MzYzNjU1MTUw.i6FFrx30HBV1t2mQ8PvnQAMbeCd8uuVkT25hv6MO_GQg._ai8WGHiw9ZBhn4eWpdS6cmGAIOxjLEc_pE_Fytx1Ngg.JPEG.dauny2920%2F%25B1%25D7%25B8%25B21.jpg&type=sc960_832' },
        { id: 4, name: 'Product 4', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTdfMjM2%2FMDAxNzA4MTMyODQxNzAz.WxW7rkHfUc9uX_Ywom0FujOt6wDQnd09bc4iFzAVKeEg.bcTkFYxi_I4hEGmrqqrJPM7DYjPYKEYgD1M9lXsFpKAg.JPEG.dltlsqldid%2Fbandicam_2024-02-17_09-59-05-722.jpg&type=sc960_832' },
        { id: 5, name: 'Product 5', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTdfMjM2%2FMDAxNzA4MTMyODQxNzAz.WxW7rkHfUc9uX_Ywom0FujOt6wDQnd09bc4iFzAVKeEg.bcTkFYxi_I4hEGmrqqrJPM7DYjPYKEYgD1M9lXsFpKAg.JPEG.dltlsqldid%2Fbandicam_2024-02-17_09-59-05-722.jpg&type=sc960_832' },
        { id: 6, name: 'Product 6', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTdfMjM2%2FMDAxNzA4MTMyODQxNzAz.WxW7rkHfUc9uX_Ywom0FujOt6wDQnd09bc4iFzAVKeEg.bcTkFYxi_I4hEGmrqqrJPM7DYjPYKEYgD1M9lXsFpKAg.JPEG.dltlsqldid%2Fbandicam_2024-02-17_09-59-05-722.jpg&type=sc960_832' },
        { id: 7, name: 'Product 7', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTdfMjM2%2FMDAxNzA4MTMyODQxNzAz.WxW7rkHfUc9uX_Ywom0FujOt6wDQnd09bc4iFzAVKeEg.bcTkFYxi_I4hEGmrqqrJPM7DYjPYKEYgD1M9lXsFpKAg.JPEG.dltlsqldid%2Fbandicam_2024-02-17_09-59-05-722.jpg&type=sc960_832' },
        { id: 8, name: 'Product 8', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTdfMjM2%2FMDAxNzA4MTMyODQxNzAz.WxW7rkHfUc9uX_Ywom0FujOt6wDQnd09bc4iFzAVKeEg.bcTkFYxi_I4hEGmrqqrJPM7DYjPYKEYgD1M9lXsFpKAg.JPEG.dltlsqldid%2Fbandicam_2024-02-17_09-59-05-722.jpg&type=sc960_832' },
        { id: 9, name: 'Product 9', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTdfMjM2%2FMDAxNzA4MTMyODQxNzAz.WxW7rkHfUc9uX_Ywom0FujOt6wDQnd09bc4iFzAVKeEg.bcTkFYxi_I4hEGmrqqrJPM7DYjPYKEYgD1M9lXsFpKAg.JPEG.dltlsqldid%2Fbandicam_2024-02-17_09-59-05-722.jpg&type=sc960_832' },
        { id: 10, name: 'Product 10', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTdfMjM2%2FMDAxNzA4MTMyODQxNzAz.WxW7rkHfUc9uX_Ywom0FujOt6wDQnd09bc4iFzAVKeEg.bcTkFYxi_I4hEGmrqqrJPM7DYjPYKEYgD1M9lXsFpKAg.JPEG.dltlsqldid%2Fbandicam_2024-02-17_09-59-05-722.jpg&type=sc960_832' },
        { id: 11, name: 'Product 11', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTdfMjM2%2FMDAxNzA4MTMyODQxNzAz.WxW7rkHfUc9uX_Ywom0FujOt6wDQnd09bc4iFzAVKeEg.bcTkFYxi_I4hEGmrqqrJPM7DYjPYKEYgD1M9lXsFpKAg.JPEG.dltlsqldid%2Fbandicam_2024-02-17_09-59-05-722.jpg&type=sc960_832' },
        { id: 12, name: 'Product 12', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTdfMjM2%2FMDAxNzA4MTMyODQxNzAz.WxW7rkHfUc9uX_Ywom0FujOt6wDQnd09bc4iFzAVKeEg.bcTkFYxi_I4hEGmrqqrJPM7DYjPYKEYgD1M9lXsFpKAg.JPEG.dltlsqldid%2Fbandicam_2024-02-17_09-59-05-722.jpg&type=sc960_832' },
        { id: 13, name: 'Product 13', imageUrl: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNDAyMTdfMjM2%2FMDAxNzA4MTMyODQxNzAz.WxW7rkHfUc9uX_Ywom0FujOt6wDQnd09bc4iFzAVKeEg.bcTkFYxi_I4hEGmrqqrJPM7DYjPYKEYgD1M9lXsFpKAg.JPEG.dltlsqldid%2Fbandicam_2024-02-17_09-59-05-722.jpg&type=sc960_832' },

        // ... 기타 제품들
    ];



    const handleNext = () => {
        if (activeIndex < products.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };
    
    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };
    
    const renderProductItems = () => {
        const limit = 5; // 표시할 제품 수
        const startIndex = Math.max(activeIndex - Math.floor(limit / 2), 0);
        const endIndex = Math.min(startIndex + limit - 1, products.length - 1);
        
        const items = products.slice(startIndex, endIndex + 1);
    
        // 각 항목에 대해 클래스 할당
        return items.map((product, index) => {
            let className = 'product-item';
    
            // 센터 항목은 center 클래스 할당
            if (index === Math.floor(limit / 2)) {
                className += ' center';
            }
            // 활성화된 인덱스 이전 항목은 left-side 클래스 할당
            else if (index < Math.floor(limit / 2)) {
                className += ' left-side';
            }
            // 활성화된 인덱스 이후 항목은 right-side 클래스 할당
            else {
                className += ' right-side';
            }
            // 센터, 좌측, 우측이 아닌 항목에는 etc 클래스 할당
            if (className === 'product-item') {
                className += ' etc';
            }
            return (
                <div key={product.id} className={className}>
                    {/* 이미지 URL을 표시하는 대신 여기에 이미지를 넣으세요 */}
                    <img src={product.imageUrl} alt={product.name} />
                </div>
            );
        });
    };
    
    return (
        <div className="slider-container">
            <div className="product-list" style={{ display: 'flex', justifyContent: 'center' }}>
                {renderProductItems()}
            </div>
            <div className="controls">
                <button className="prev-button" onClick={handlePrev}>Previous</button>
                <button className="next-button" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default Slider;