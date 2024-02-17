import React, { useEffect, useState } from 'react'
const Category = () => {
    const [CategoryData , setCategoryData] = useState()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.testvalley.kr/main-shortcut/all');
                const data = await response.json();
                setCategoryData(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='grid grid-cols-10 w-full items-center py-3 px-[18%]  mt-7'>
            {CategoryData?.map((item, index) => (
                <div className='flex flex-col items-center' key={index}>
                    <div className='w-[60px] overflow-hidden '>
                        <img src={item.imageUrl} alt="categorys" className='w-full' />
                    </div>
                    <p className='text-[13px]'>{item.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Category