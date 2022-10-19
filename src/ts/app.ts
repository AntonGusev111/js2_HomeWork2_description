import Cart from './service/Cart';
import Book from './domain/Book';
import Movie from './domain/Movie'
import MusicAlbum from './domain/MusicAlbum';

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new MusicAlbum(1009, 'Meteora1', 'Linkin Park1', 911));
cart.add(new Movie(1,'Movie43', 2015, 'USA', 'tagline', ['comedy'], 555, 555))


console.log(cart.items);
