export interface UserCard {
  id: number;
  userId: string;
  cardId: string;
  amount: number;
}

export interface UserCardImage {
  small: string;
}

export interface UserCardSet {
  name: string;
  series: string;
  total: number;
 }

export interface UserCardData {
  id: string;
  images: UserCardImage;
  name: string;
  number: string;
  set: UserCardSet;
}

export interface UserCardsData {
  data: UserCardData[];
  totalCount: number;
}
