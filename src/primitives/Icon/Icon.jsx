import React from 'react';

import {
  AddUser,
  ATPLogo,
  ArrowLeft,
  BackArrow,
  Bookmark,
  CloseIcon,
  ContactIcon,
  EllipsisIcon,
  EmailIcon,
  EventsIcon,
  FacebookIcon,
  HeartIcon,
  HomeIcon,
  Info,
  JobsIcon,
  LinkedinIcon,
  Location,
  Money,
  ProfileIcon,
  ShareAlt,
  Ticket,
  TwitterIcon,
  WebsiteIcon,
  Parts,
  Plus,
} from 'assets/svgs';

const Icon = (props) => {
  const { name } = props;
  const getIcon = () => {
    switch (name) {
      case 'add-user':
        return <AddUser {...props} />;
      case 'arrow-left':
        return <ArrowLeft {...props} />;
      case 'atp-logo':
        return <ATPLogo {...props} />;
      case 'back-arrow':
        return <BackArrow {...props} />;
      case 'bookmark':
        return <Bookmark {...props} />;
      case 'close':
        return <CloseIcon {...props} />;
      case 'contact':
        return <ContactIcon {...props} />;
      case 'ellipsis':
        return <EllipsisIcon {...props} />;
      case 'email':
        return <EmailIcon {...props} />;
      case 'events':
        return <EventsIcon {...props} />;
      case 'facebook':
        return <FacebookIcon {...props} />;
      case 'heart':
        return <HeartIcon {...props} />;
      case 'home':
        return <HomeIcon {...props} />;
      case 'info':
        return <Info {...props} />;
      case 'jobs':
        return <JobsIcon {...props} />;
      case 'linkedin':
        return <LinkedinIcon {...props} />;
      case 'location':
        return <Location {...props} />;
      case 'money':
        return <Money {...props} />;
      case 'profile':
        return <ProfileIcon {...props} />;
      case 'share-alt':
        return <ShareAlt {...props} />;
      case 'ticket':
        return <Ticket {...props} />;
      case 'twitter':
        return <TwitterIcon {...props} />;
      case 'website':
        return <WebsiteIcon {...props} />;
      case 'parts':
        return <Parts {...props} />;
      case 'plus':
        return <Plus {...props} />;
    }
  };

  return getIcon();
};

export default Icon;
