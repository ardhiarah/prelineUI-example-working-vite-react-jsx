export default function AccordionItem(props) {
    const { title, content } = props;

    return (
        <div className='hs-accordion'>
            <button className='hs-accordion-toggle inline-flex w-full items-center gap-x-3 rounded-lg py-3 text-start font-semibold text-gray-800 hover:text-gray-500 disabled:pointer-events-none disabled:opacity-50 hs-accordion-active:text-blue-600 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400 dark:focus:outline-none dark:hs-accordion-active:text-blue-500'>
                <svg
                    className='block h-4 w-4 hs-accordion-active:hidden'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path d='M5 12h14' />
                    <path d='M12 5v14' />
                </svg>
                <svg
                    className='hidden h-4 w-4 hs-accordion-active:block'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path d='M5 12h14' />
                </svg>
                {title}
            </button>
            <div className='hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300'>
                <p className='text-gray-800 dark:text-gray-200'>{content}</p>
            </div>
        </div>
    );
}
