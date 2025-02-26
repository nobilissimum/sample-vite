import { Fragment, ReactNode, useEffect, useRef, useState } from 'react';

const DEFAULT_WORD = 'error' as const;

export default function TextGrid(): ReactNode {
    const [word, setWord] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const page = useRef<boolean>(true);

    async function fetchData() {
        try {
            console.log(`Fetching ${import.meta.env.VITE_API_URL}`);
            const response = await fetch(`${import.meta.env.VITE_API_URL}`);
            const body = await response.json();

            setWord(body.message);
        } catch {
            setWord(DEFAULT_WORD);
        }

        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();

        return () => {
            page.current = false;
        };
    }, []);

    return isLoading ? (
        <div className='flex h-screen max-h-full w-full items-center justify-center p-4'>
            <div className='h-full w-full bg-conic-30' />
        </div>
    ) : (
        <div className='h-screen max-h-full w-full overflow-hidden text-gray-400'>
            <div className='h-content mt-[-152px] min-h-screen w-full items-center justify-center text-8xl tracking-tighter'>
                {Array.from({ length: 10 }, (_, outer) => (
                    <Fragment key={outer}>
                        <div className='ml-[-100px] w-max font-heading font-bold'>
                            {Array.from({ length: 20 }, (_, inner) => (
                                <span key={inner} className='pr-6'>
                                    {word}
                                </span>
                            ))}
                        </div>

                        <div className='ml-[-276px] w-max font-heading font-bold'>
                            {Array.from({ length: 20 }, (_, inner) => (
                                <span key={inner} className='pr-6'>
                                    {word}
                                </span>
                            ))}
                        </div>

                        <div className='ml-[-40px] w-max font-heading font-bold'>
                            {Array.from({ length: 20 }, (_, inner) => (
                                <span key={inner} className='pr-6'>
                                    {word}
                                </span>
                            ))}
                        </div>

                        <div className='ml-[-205px] w-max font-heading font-bold'>
                            {Array.from({ length: 20 }, (_, inner) => (
                                <span key={inner} className='pr-6'>
                                    {word}
                                </span>
                            ))}
                        </div>

                        <div className='ml-[-365px] w-max font-heading font-bold'>
                            {Array.from({ length: 20 }, (_, inner) => (
                                <span key={inner} className='pr-6'>
                                    {word}
                                </span>
                            ))}
                        </div>
                    </Fragment>
                ))}
            </div>
        </div>
    );
}
