import React from 'react'
import style from './index.module.scss'
import { Helmet } from "react-helmet-async";
import { useUser } from '../../Context/userContext';
import Profile from '../../Layouts/Account Layouts/Profile';
import ChangePassword from '../../Layouts/Account Layouts/Change Password';
import useLocalstorage from '../../Hooks/useLocalstorage';
import CreateNewProduct from '../../Layouts/Account Layouts/Create New Product';
import MyProducts from '../../Layouts/Account Layouts/My Products';

function AccountPage() {

    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

    const [page, setPage] = useLocalstorage('accountPage', 'profile')

    const { user, setUser, Logout } = useUser()

    return (
        <>
            <Helmet>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <title>Profile</title>
            </Helmet>
            <div id={style.AccountPage}>
                <div style={isSidebarOpen ? { left: '0' } : { left: '-200px' }} className={`${style.menu}`}>
                    <div onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={style.arrow}>
                        <i className={`fa-solid fa-arrow-${isSidebarOpen ? 'left' : 'right'}-long`}></i>
                    </div>
                    <h2 className={style.menuTitle}>Account</h2>
                    <ul className={style.menuList}>
                        <li onClick={() => setPage('profile')}>Profile</li>
                        <li onClick={() => setPage('changePassword')}>Change Password</li>
                    </ul>
                    <h2 className={style.menuTitle}>Auction</h2>
                    <ul className={style.menuList}>
                        <li onClick={() => setPage('myProducts')}>My Products</li>
                        <li onClick={() => setPage('newProduct')}>Create New Product</li>
                    </ul>
                </div>

                <div className={`${style.display}`}>{
                    page && page === 'profile' ? <Profile />
                        :
                        page === 'changePassword' ? <ChangePassword />
                            :
                            page === 'newProduct' ? <CreateNewProduct />
                                :
                                page === 'myProducts' ? <MyProducts />
                                    : ''
                }</div>
            </div>
        </>
    )
}

export default AccountPage