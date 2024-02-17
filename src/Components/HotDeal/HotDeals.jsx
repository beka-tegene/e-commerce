import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineStar, MdOutlineAccessTimeFilled } from "react-icons/md";
const HotDeals = () => {
    const [hotDealsData, setHotDealsData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.testvalley.kr/collections?prearrangedDiscount');
                const data = await response.json();
                setHotDealsData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const filterHotDeal = hotDealsData?.items?.filter((data) => data.type === 'SINGLE' && data.viewType === 'TILE')
    const slicedHotDeal = filterHotDeal?.slice(0, 1);
    return (
        <div className='grid grid-cols-3  w-full items-center py-3 px-[18%] gap-4 mt-7 relative'>
            <div className='col-span-1 '>
                <h1>{slicedHotDeal?.[0]?.title}</h1>
                <p>[UP TO 34% OFF] {slicedHotDeal?.[0]?.subtitle}</p>
                <div className='flex gap-3 absolute bottom-0'>
                    <IoIosArrowBack className='text-[24px] text-[#999999] cursor-pointer' />
                    <IoIosArrowForward className='text-[24px] cursor-pointer' />
                </div>
            </div>
            <div className='grid grid-cols-4 col-span-2 gap-2'>
                {slicedHotDeal?.[0]?.items?.slice(0, 4)?.map((item, index) => (
                    <div className='flex flex-col gap-1' key={index}>
                        <div className='relative'>
                            <img src={item?.publication?.media[0]?.uri} alt='hot deal' className='w-full rounded' />
                            <h1 className='absolute bottom-2 left-2 bg-[#009e8a] px-2 text-white rounded-md text-[14px]'>{item?.publication?.tagsOnImage[0]}</h1>
                        </div>
                        <h1 className='text-[13px]'>{item?.publication?.productName.slice(0, 25)}... </h1>
                        <div>
                            <span className='text-[#FF5022] font-bold'>{item?.publication?.priceInfo?.discountRate ? item?.publication?.priceInfo?.discountRate : 0}%</span>
                            <span className='font-bold'>{item?.publication?.priceInfo?.price}<span className='font-normal text-[13px]'>Birr</span></span>
                        </div>
                        <div className='flex gap-1 items-center text-[13px]'>
                            <MdOutlineStar />
                            <span>{item?.publication?.rating}</span>
                        </div>
                        <div className='flex gap-1 items-center border w-fit px-1'>
                            <MdOutlineAccessTimeFilled className='text-[#5BEBB7]' />
                            <span>LUCKY DEAL</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HotDeals