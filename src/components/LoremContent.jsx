import React from 'react'
import '@styles/_LoremContent.scss'

const LoremContent = () => {
  return (
    <>
    <div className="container loremContent">
    <p>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere,<br /> magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.<br />
    <br />
    Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.<br />
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra<br /> nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui<br /> purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut<br /> nonummy.

    <br /><br />Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce<br /> posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.<br /> unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus<br /> et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.

    <br /><br />Aenean nec lorem. In porttitor.<br /> Donec laoreet nonummy augue.
    Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris<br /> eget neque at sem venenatis eleifend. Ut nonummy.
    </p>
</div>
<div className="container loremQuote">
    <div className="Quote"><i class="fa-duotone fa-comment-quote"></i></div>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas<br /> porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,<br /> purus lectus malesuada libero, sit amet commodo magna eros quis urna.</p>
</div>
<div className="container loremSmall">
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed<br /> pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim.<br /> Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
</div>
    </>
  )
}

export default LoremContent