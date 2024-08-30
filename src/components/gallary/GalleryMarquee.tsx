import Marquee from 'react-fast-marquee';
import { LazyLoadImage, trackWindowScroll, LazyComponentProps } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface GalleryMarqueeProps extends LazyComponentProps {
    pics: string[];
    delay: number;
}

function GalleryMarquee({ pics, delay }: GalleryMarqueeProps) {
    return (
        <Marquee
            pauseOnHover
            delay={delay}
            gradient
            gradientColor="#f8ffeb"
            className='flex justify-evenly items-center'
        >
            {
                pics.map((company, index) => (
                    <div key={index} className=' border-4 border-white relative'>
                        <LazyLoadImage
                            // loading="lazy"
                            placeholderSrc='data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
                            wrapperProps={{
                                // If you need to, you can tweak the effect transition using the wrapper style.
                                style: { transitionDelay: "0.5s" },
                            }}
                            effect="blur"
                            src={company}
                            alt={company}
                            className='h-40 w-48 object-fill'
                        />
                    </div>
                ))
            }
        </Marquee>
    )
}

export default trackWindowScroll(GalleryMarquee);
