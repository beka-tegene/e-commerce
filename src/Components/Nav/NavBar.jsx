import React, { useState } from 'react'
import { IoMdMenu, IoMdSearch, IoMdCart } from "react-icons/io";
import Input from '../UI/Input';
const NavBar = () => {
    const [search, setSearch] = useState();
    console.log(search);
    return (
        <div className='flex w-full items-center bg-[#ffffff] py-3 px-[18%] sticky top-0 shadow z-10'>
            <div className='flex items-center gap-4'>
                <h1 className='text-[#00D094] font-semibold text-[22px]'>Testvalley</h1>
                <div className='flex items-center text-[#00D094] cursor-pointer'>
                    <IoMdMenu className='text-[24px]' />
                    <span>Menu</span>
                </div>
            </div>
            <div className='flex-grow-[0.5]'></div>
            <div className='flex items-center border-[2px] rounded border-[#9a9a9a] w-[300px]' >
                <IoMdSearch className='text-[24px] text-[#4f4f4f]' />
                <Input setSearch={setSearch} placeholder={'Search ...'} />
            </div>
            <div className='flex-grow'></div>
            <div className='flex items-center gap-4'>
                <IoMdCart className='text-[24px] cursor-pointer' />
                <hr className=' w-[1px] h-5 bg-[#272727]' />
                China / Japan
            </div>
        </div>
    )
}

export default NavBar