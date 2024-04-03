import React, { useState } from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import { useQuery } from 'react-query'; // 리액트 쿼리 임포트

/**나중에 사이드바혹은 재생목록추가기능 만들고 연결 
 * 리액트 쿼리 사용 예정......
*/
const LibrarySidebar = () => {
  // 리액트 쿼리를 사용하여 라이브러리에서 정보를 가져오는 로직
  const { data, isLoading } = useQuery('libraryInfo', async () => {
    const response = await fetch('라이브러리에서 정보를 가져오는 API 경로');
    return response.json();
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

const LibraryButton = () => {
  // 클릭 시 정보를 추가하고, 해당 정보를 사이드바에서 확인할 수 있도록 상태 설정
  const [addedInfo, setAddedInfo] = useState('');

  const handleAddInfo = () => {
    // 추가되는 정보를 라이브러리에 보내는 로직
    // 라이브러리에 추가된 정보를 가져오는 로직은 리액트 쿼리로 처리하고, 위에서 구현한 LibrarySidebar 컴포넌트에서 확인할 수 있음
  };

  return (
    <div>
      <CiCircleCheck className='plus-button' onClick={handleAddInfo} />
    </div>
  );
};

export default LibrarySidebar;