import { useState } from 'react';
import SUInput from '../components/contents/signup/SUInput';
import SUSelect from '../components/contents/signup/SUSelect';

function SignUp() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    name: '',
    gender: '',
    year: '',
    month: '',
    day: '',
  });

  const [userInfoSearch, setUserInfoSearch] = useState({
    gender: '',
    year: '',
    month: '',
    day: '',
  });

  const yearList = Array.from({ length: 70 }, (_, i) => `${i + 1955}년`);
  const monthList = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);
  const dayList = Array.from({ length: 31 }, (_, i) => `${i + 1}일`);

  const [selectOpen, setSelectOpen] = useState('');

  const handleChange = (id: string, value: string) => {
    setUserInfo(prev => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleSelectChange = (id: string, value: string) => {
    setUserInfoSearch(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <>
      {/* form 태그 추가 & onSubmit */}
      {/* Header 삽입하기 */}
      <div className='flex flex-col gap-4'>
        <SUInput
          title='아이디'
          className='px-4 py-3.5'
          type='text'
          id='email'
          value={userInfo.email}
          placeholder='이메일을 입력해 주세요'
          onChange={e => handleChange(e.target.id, e.target.value)}
        />
        <SUInput
          title='비밀번호'
          className='px-4 py-3.5'
          type='password'
          id='password'
          value={userInfo.password}
          placeholder='비밀번호를 입력해 주세요'
          onChange={e => handleChange(e.target.id, e.target.value)}
        />
        <SUInput
          title='이름'
          className='px-4 py-3.5'
          type='text'
          id='name'
          value={userInfo.name}
          placeholder='이름을 입력해 주세요'
          onChange={e => handleChange(e.target.id, e.target.value)}
        />
        <SUSelect
          title='성별'
          className='px-4 py-3.5'
          type='text'
          id='gender'
          value={userInfoSearch.gender}
          placeholder='성별을 선택해 주세요'
          onChange={e => handleSelectChange(e.target.id, e.target.value)}
          handleSelectChange={value => handleSelectChange('gender', value)}
          handleChange={value => handleChange('gender', value)}
          options={['여자', '남자']}
          selectedOption={userInfo.gender}
          selectOpen={selectOpen}
          setSelectOpen={setSelectOpen}
        />
        <div className='flex gap-1'>
          <SUSelect
            title='생년월일'
            className='px-2.5 py-[12.5px]'
            type='text'
            id='year'
            value={userInfoSearch.year}
            placeholder='년'
            onChange={e => handleSelectChange(e.target.id, e.target.value)}
            handleSelectChange={value => handleSelectChange('year', value)}
            handleChange={value => handleChange('year', value)}
            options={yearList}
            selectedOption={userInfo.year}
            selectOpen={selectOpen}
            setSelectOpen={setSelectOpen}
          />
          <SUSelect
            className='px-2.5 py-[12.5px]'
            type='text'
            id='month'
            value={userInfoSearch.month}
            placeholder='월'
            onChange={e => handleSelectChange(e.target.id, e.target.value)}
            handleSelectChange={value => handleSelectChange('month', value)}
            handleChange={value => handleChange('month', value)}
            options={monthList}
            selectedOption={userInfo.month}
            selectOpen={selectOpen}
            setSelectOpen={setSelectOpen}
          />
          <SUSelect
            className='px-2.5 py-[12.5px]'
            type='text'
            id='day'
            value={userInfoSearch.day}
            placeholder='일'
            onChange={e => handleSelectChange(e.target.id, e.target.value)}
            handleSelectChange={value => handleSelectChange('day', value)}
            handleChange={value => handleChange('day', value)}
            options={dayList}
            selectedOption={userInfo.day}
            selectOpen={selectOpen}
            setSelectOpen={setSelectOpen}
          />
        </div>
      </div>
    </>
  );
}

export default SignUp;
