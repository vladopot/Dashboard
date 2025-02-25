import React, { useEffect, useState } from 'react'
import './UserList.scss'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { EngLangDatas, RusLangDatas } from '../../models/languageDatas';
import { RootState } from '../../Redux/store';
import { Button, Pagination } from 'antd';
import Search from 'antd/es/input/Search';
import { ResponseModel, userModel } from '../../models/ResponseModel';
import { addData } from '../../Redux/UsersSlice';
import { RightOutlined } from '@ant-design/icons';

const UserList = () => {
  const link = 'https://dummyjson.com/users';
  const language = useSelector((state: RootState) => state.language.value);
  const [currentPage, sePage] = useState(1);
  const users: userModel[] = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();

  useEffect(() => {
      if (users.length === 0) {
        axios.get<ResponseModel>(link)
      .then(response => {
        const data = response.data.users;
        dispatch(addData(data))
      })
      .catch(error => {
        console.error(error);
      });
      }}, []);

  return (
    <div className="main">
      <h2>{language === 'ENG' ? EngLangDatas.UserList.tittle : RusLangDatas.UserList.tittle}</h2>
      <div
          className="search_wrapper"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}>
        <Search 
          placeholder="input search text"
          enterButton
          size='large'
          style={{
            maxWidth: '200px'
          }}/>
      </div>
      <div className="userList">
          {
            users.slice((currentPage - 1) * 5, currentPage * 5).map(e => (
              <div key={e.id} className="user">
                <div className="img_wrapper">
                  <img src={e.image} alt="user_icon" />
                </div>
                <div className="user_credentials">
                  <p className='full_Name'>{`${e.firstName} ${e.lastName}`}</p>
                  <p className="user_address">{e.address.address}</p>
                </div>
                <Button style={{marginTop: 15}} type='text' icon={<RightOutlined />} />
              </div>
            ))
          }
      </div>
      <Pagination
        onChange={(page) => {
          sePage(page);
          console.log(currentPage);
        }}
        simple
        defaultCurrent={1}
        pageSize={5}
        align='center'
        total={users.length}
         />
    </div>
  )
}

export default UserList