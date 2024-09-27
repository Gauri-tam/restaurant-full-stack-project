import 'flowbite';

const CartImageSlider = () => {
    return (
        <div>
            <div id="gallery" className="relative w-full" data-carousel="slide">
                <div className="relative overflow-visible rounded-lg md:h-96"> {/*this is not working */}
                    {/* // all images are static */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg"
                            className=" rounded-lg block w-full h-full top-1/2 left-1/2"
                            alt="" />
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="https://static3.depositphotos.com/1003631/209/i/450/depositphotos_2099183-stock-photo-fine-table-setting-in-gourmet.jpg"
                            className=" rounded-lg block w-full h-full  top-1/2 left-1/2"
                            alt="" />
                    </div>

                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="https://t4.ftcdn.net/jpg/02/94/26/33/360_F_294263329_1IgvqNgDbhmQNgDxkhlW433uOFuIDar4.jpg"
                            className=" rounded-lg block w-full h-full  top-1/2 left-1/2"
                            alt="" />
                    </div>
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
                            className=" rounded-lg block w-full h-full  top-1/2 left-1/2"
                            alt="" />
                    </div>
                </div>
                <button type="button" className="absolute top-0 start-0 -left-20 z-40 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-gray/50 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-black  dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 -right-20 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/30 dark:bg-gray-800/30 group-hover:bg-gray/50 dark:group-hover:bg-gray-800/60  dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    )
}
export default CartImageSlider;