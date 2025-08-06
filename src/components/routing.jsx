import {Routes,Route, Router, replace} from 'react-router-dom'
import HeroSec  from './HeroSec';
import { Login } from './Login';
import { InfloReg } from './InfluencerRegistration';
import { BrandReg } from './Brandregistration';
import { AfterLoginMainPage } from './AfterLoginMainPage';
import { InfluencerProfileView } from '../MainSecAfterLogin/InfluencerProfileView';
import {PrivacyPage} from '../MainSecAfterLogin/PrivacyPage';
import { TermsAndConditions } from '../MainSecAfterLogin/TermsAndConditions';
import {RefundPolicy} from '../MainSecAfterLogin/RefundPolicy';
import {FAQSection} from '../MainSecAfterLogin/Faq';

// import InfluencerSideBar from '../MainSecAfterLogin/InfluencerDashBoard/InfluencerSideBar';
import { ProtectRoute } from './ProtectRoute';

import { BrandSideBar } from '../MainSecAfterLogin/BrandSidebar';
import {PostCampaign} from '../MainSecAfterLogin/BrandPostCampagins';
import Billing from '../MainSecAfterLogin/BrandBilling';
import Messages from '../MainSecAfterLogin/BrandMessages';
import { BrowserInfluencers } from '../MainSecAfterLogin/BrowseInfluencers';
import BrandReports from '../MainSecAfterLogin/BrandReports';
import ManageCampaigns from '../MainSecAfterLogin/ManageCampagins';
import MainArea from '../MainSecAfterLogin/InfluencerDashBoard/InfluMainArea';
export const Routing = () => {
    return ( 
     
        <Routes>
            <Route  path='/' element={<HeroSec />} />
            <Route path='/login' element={<Login />} />
            <Route path='/login/:role' element={<Login />} />
            <Route path='/registration/influencer' element={<InfloReg />} />
            <Route path='/registration/brand' element={<BrandReg />} />
            <Route path='/HomePage' element={
                
                <AfterLoginMainPage />
                
                } />
            <Route path='/InfluencerProfileView' element={<InfluencerProfileView/>} />
            <Route path='/privacy' element={<PrivacyPage />} />
            <Route path='/Terms-conditions' element={<TermsAndConditions />} />
            <Route path='/refund-policy' element={<RefundPolicy />} />
            <Route path="/faq" element={<FAQSection/>} />
            {/* <Route path='influencer-dashboard' element={<InfluencerSideBar />} /> */}
              <Route path='influencer-dashboard' element={<MainArea/>} />

            
            <Route path='/brand-dashboard' element={<BrandSideBar />} />
            <Route path='/managePosts' element={<ManageCampaigns/>} />
            <Route path='/postCampagins' element={<PostCampaign />} />
            <Route path='/billing' element={<Billing />} />
            <Route path='/messages' element={<Messages />} />
            <Route path='/reports' element={<BrandReports />} />
            <Route path='/BrowserInfluencers' element={<BrowserInfluencers />}/>
           
        </Routes>
       
     );
}