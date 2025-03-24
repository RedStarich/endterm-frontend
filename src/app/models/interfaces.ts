export interface MenuItem {
    icon: string;
    label: string;
    badge: string | null;
  }
  
  export interface Story {
    name: string;
    profileImg: string;
    backgroundImg: string;
  }
  
  export interface Post {
    id: number;
    userName: string;
    action?: string;
    timeAgo: string;
    profileImg: string;
    image?: string;
    text?: string;
    hasMore?: boolean;
    reactions: {
      count: string;
      types: Array<{
        type: string;
        icon: string;
      }>;
    } | null;
    comments: string | null;
    shares: string | null;
  }
  
  export interface Contact {
    name: string;
    message: string;
    time: string;
    online: boolean;
    img: string;
  }
  
  export interface Group {
    name: string;
    img: string;
  }
  
  export interface Page {
    name: string;
    followers: string;
    img: string;
  }