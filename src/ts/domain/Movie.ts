import Buyable from './Buyable.js';

/**                                                                                                                                                                                                                                                                                  
 * @module user                                                                                                                                                                                                                                                                      
 */                                                                                                                                                                                                                                                                                  
                                                                                                                                                                                                                                                                                     
/**                                                                                                                                                                                                                                                                                  
 * Load user info by id                                                                                                                                                                                                                                                              
 *                                                                                                                                                                                                                                                                                   
 * @param {number} id user id                                                                                                                                                                                                                                                        
 * @returns {Object} user info                                                                                                                                                                                                                                                       
 */
export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly year: number,
        readonly country: string,
        readonly tagline: string,
        readonly genre: string[],
        readonly price: number,
        readonly time: number,
    ) { }
}