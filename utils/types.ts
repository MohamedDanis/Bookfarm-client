export type userDetailsProps = {
    id: string;
    name: string;
    email: string;
    phone: string;
    place: string;
    isSubscribed: boolean;
    subscriptionEnd?: any;
    borrowedBooks?: Array<{
      borrowId: string;
      bookId: string;
      borrowDate: string;
    }>;
    bookRequests?: any[];
  };