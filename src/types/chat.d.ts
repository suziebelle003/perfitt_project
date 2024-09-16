export interface IMessage {
  id: number;
  message: string;
  target: 'user' | 'AI';
}

export interface IChatMessage {
  chatMessage: IMessage[];
}

export interface IInputText {
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  inputText: string;
  handleMessage: (text: string) => void;
}

export interface IText {
  text: string;
}

export interface IAIMessage {
  text: string;
}

export interface IBrandCard {
  brand: string;
  thumbnail: string;
  link: string;
}

export interface IProductCard {
  productId: string;
  image: string;
  link: string;
  modelName: string;
  brand: string;
  modelNo: string;
}
