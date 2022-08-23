import React from 'react';
import './SocialLinksStyle.scss';



const SocialLinks = (props) => {
  const {socialInfo} = props;
  return(
      <ul className={`soc_linkStyle ${props.className}`}>
           {props.soc_twitter && <li className='soc_twitter'><a href={props.soc_twitter} target="_blank"></a></li>} 
           {props.soc_linkedIn && <li className='soc_linkedIn'><a href={props.soc_linkedIn} target="_blank"></a></li>} 
           {props.soc_discord && <li className='soc_discord'><a href={props.soc_discord} target="_blank"></a></li>} 
           {props.soc_telegram && <li className='soc_telegram'><a href={props.soc_telegram} target="_blank"></a></li>} 
           {props.soc_instagram && <li className='soc_instagram'><a href={props.soc_instagram} target="_blank"></a></li>} 
           {props.soc_facebook && <li className='soc_facebook'><a href={props.soc_facebook} target="_blank"></a></li>}     
           {props.soc_youtube &&<li className='soc_youtube'><a href={props.soc_youtube} target="_blank"></a></li>}       
           {props.soc_snapchat &&<li className='soc_snapchat'><a href={props.soc_snapchat} target="_blank"></a></li>}       
           {props.soc_tiktok &&<li className='soc_tiktok'><a href={props.soc_tiktok} target="_blank"></a></li>}       
           {props.soc_twitch &&<li className='soc_twitch'><a href={props.soc_twitch} target="_blank"></a></li>}       
           {props.soc_weblink &&<li className='soc_weblink'><a href={props.soc_weblink} target="_blank"></a></li>}       
      </ul>
  ) 
  
  ;
};

export { SocialLinks };
