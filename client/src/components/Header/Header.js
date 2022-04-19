import { ArrowDropDown, ShoppingCart } from '@mui/icons-material';
import { Badge, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavContainer, Navs, Logo, SearchContainer, LogoImg } from './style';
function Header() {
    const [navBar, setNavColor] = useState(false);

    function usePageViews() {
        let location = useLocation();

        useEffect(() => {
            console.log(location);

            if (location.pathname === '/') {
                window.addEventListener('scroll', changeColor);
                changeColor();
            } else setNavColor(true);
            return () => {
                window.removeEventListener('scroll', changeColor);
            };
        }, [location]);
    }

    const changeColor = () => {
        if (window.scrollY >= 70) {
            setNavColor(true);
        } else setNavColor(false);
    };

    usePageViews();

    return (
        <div
            className={
                navBar
                    ? 'h-20 z-10 top-0 sticky transition-all items-center border-solid flex align-middle bg-gray-700 text-white'
                    : 'h-20 z-10 top-0 sticky transition-all  items-center border-solid flex align-middle bg-transparent text-white'
            }
        >
            <Logo>
                <Link
                    style={{
                        textDecoration: 'none',
                        color: 'white'
                    }}
                    to="/"
                >
                    <LogoImg />
                </Link>
            </Logo>

            <NavContainer>
                <Navs>
                    Home <ArrowDropDown />
                </Navs>
                <Navs>
                    <Link
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}
                        to="/shoppage"
                    >
                        {' '}
                        Shop
                    </Link>

                    <ArrowDropDown />
                </Navs>
                <Navs>
                    Products
                    <ArrowDropDown />
                </Navs>
                <Navs>
                    Pages
                    <ArrowDropDown />
                </Navs>
                <Navs>
                    Blog
                    <ArrowDropDown />
                </Navs>
            </NavContainer>
            <SearchContainer>
                <TextField
                    label="Search"
                    variant="standard"
                    InputLabelProps={{
                        style: { color: '#fff' }
                    }}
                    className="text-white"
                />
                <Link to="/login">SignOut</Link>
                <Badge badgeContent={4} color="primary">
                    <Link
                        style={{
                            textDecoration: 'none',
                            color: 'white'
                        }}
                        to="cart"
                    >
                        <ShoppingCart />
                    </Link>
                </Badge>
            </SearchContainer>
        </div>
    );
}

export default Header;
