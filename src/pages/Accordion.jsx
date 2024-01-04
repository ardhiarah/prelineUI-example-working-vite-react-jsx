import AccordionGroup from '../components/AccordionGroup';

export default function Accordion() {
    return (
        <>
            <div className='mb-10'>
                <h2 className='mb-2'>Accordion Group 1</h2>
                <AccordionGroup />
            </div>
            <div className='mb-10'>
                <h2 className='mb-2'>Accordion Group 2</h2>
                <AccordionGroup />
            </div>
            <div className='my-20 font-bold tracking-tight'>
                Now, for the rest you can add another components from PrelineUI
                <a href='https://preline.co/' target='_blank'>
                    <span className='text-blue-500 hover:text-blue-400'> (preline.co)</span>
                </a>
                .<span className='italic'> Good Luck, Have Fun! </span>😁
            </div>
        </>
    );
}
