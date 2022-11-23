import React from 'react'

const GridItem = () => {
  return (
    <div>
      <div className="relative">
        {/* Product card container */}
        <div className="w-full p-1 m-1">
          <div className="w-full cursor-pointer bg-slate-500 relative text-black text-sm font-normal">
            {/* Assets ( images) */}
            <div className='relative pb-[100%]'>
              <a  href="#" className='absolute inset-0'>
                <img data-auto-id="image" title="Adilette Comfort Slides" src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg" srcset="https://assets.adidas.com/images/w_178,h_178,f_auto,q_auto,fl_lossy,c_fill,g_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg 178w,
https://assets.adidas.com/images/w_186,h_186,f_auto,q_auto,fl_lossy,c_fill,g_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg 186w,
https://assets.adidas.com/images/w_205,h_205,f_auto,q_auto,fl_lossy,c_fill,g_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg 205w,
https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg 303w,
https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg 383w,
https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg 766w" sizes="(min-width: 960px) 25vw, (min-width: 600px) 33vw, 49vw" loading="lazy" alt="Yoga Black Adilette Comfort Slides" class="img_with_fallback___2aHBu glass-product-card__image performance-item" data-inject_ssr_performance_instrument=""/>

              </a>
            </div>
            <a href="#">
              {/* Product-card _ details  Adjust min high later */}
              <div className="p-[10px] min-h-[75px] ">
                <p>Adilette Comfort Slides</p>
                <p className="text-slate-700">Yoga</p>
                <p className="text-slate-700">
                  <span>2 colors</span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridItem