import React, { useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineStar, MdOutlineAccessTimeFilled } from "react-icons/md";
const Card = () => {
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
    return (
        <>
            {
                filterHotDeal?.slice(1, 10).map((item, index) => (
                    <div className='grid grid-cols-3  w-full items-center py-3 px-[18%] gap-4 mt-7 relative' key={index}>
                        <div className='col-span-1 '>
                            <h1>{item?.title}</h1>
                            <p>{item?.subtitle}</p>
                            <div className='flex gap-3 absolute bottom-0'>
                                <IoIosArrowBack className='text-[24px] text-[#999999] cursor-pointer' />
                                <IoIosArrowForward className='text-[24px] cursor-pointer' />
                            </div>
                        </div>
                        <div className='grid grid-cols-4 col-span-2 gap-2'>
                            {item?.items?.slice(0, 4)?.map((data, index) => (
                                <div className='flex flex-col gap-1' key={index}>
                                    <div className='relative'>
                                        <img src={data?.publication.media[0].uri} alt='hot deal' className='w-full rounded' />
                                    </div>
                                    <h1 className='text-[13px]'>{data?.publication?.productName.slice(0, 25)}... </h1>
                                    <div>
                                        <span className='text-[#FF5022] font-bold'>{data?.publication?.priceInfo?.discountRate ? data?.publication?.priceInfo?.discountRate : 0}%</span>
                                        <span className='font-bold'>{data?.publication?.priceInfo?.price}<span className='font-normal text-[13px]'>Birr</span></span>
                                    </div>
                                    <div className='flex gap-1 items-center text-[13px]'>
                                        <MdOutlineStar />
                                        <span>{data?.publication?.rating}</span>
                                    </div>
                                    {data?.publication?.prefaceIconUrl ?
                                        <div className='flex gap-1 items-center border w-fit px-1'>
                                            <div>
                                                <img src={data?.publication?.prefaceIconUrl} alt="logo" className='w-[15px]' />
                                            </div>
                                            {/* <MdOutlineAccessTimeFilled className='text-[#5BEBB7]' /> */}
                                            <span className='text-[12px]'>{data?.publication?.preface}</span>
                                        </div> : ''
                                    }
                                </div>




                            ))}

                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Card