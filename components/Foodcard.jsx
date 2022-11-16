import styles from '/styles/Foodcard.module.css'
import Image from 'next/image';
import Link from 'next/link';






export default function FoodItems(props) {


    const myLoader = ({ src, width, quality }) => { 
        return `${src}`
    }
    return (
        // <div className={styles.foodcard}>
        <div className=' m-3  sm:w-3/12 md:w-4/12 lg:w-3/12 flex flex-col rounded drop-shadow border'>

            <Image
                loader={myLoader}
                src={props.food.img}
                height='150'
                width='200'
                objectFit='fill'
                
                
            />
            <p className='text-2xl my-2 text-center'>{props.food.name}</p>
            <p className='px-3 font-light'>{props.food.desc.slice(0,60)+'..'}</p>
            <p className='px-3 my-1'>${props.food.price[0]}</p>
            < Link href={`product/${props.food._id}`} passHref className='w-full'>
            {/* <input className={styles.button} type="button" value="View " /> */}
            <input className='bg-black text-white w-11/12  ml-3 mb-2 p-1 rounded cursor-pointer' type="button" value="View " />
            </Link>


        </div>
    )
}
