// import sendSms from '../utils/twilio';
import Quote from '../models/Quote';


export default class smsService {
  // send a text and store the order
  
  static async createRonQ(quote) {
    //send text
    console.log('quote', quote);
    // await sendSms(
    //   process.env.ORDER_HANDLER_NUMBER,
    //   `New Order received for ${quote}`
    // );
  
    //store the order
    
    const ronQuote = await Quote.insert(quote);
    return ronQuote;
  }
  
  static async ronQuotes() {
    //send text
    // await sendSms(
    //   process.env.ORDER_HANDLER_NUMBER,
    //   'Here is a quote!'
    // );
  
    //store the order
   
    const ronQuote = await Quote.select();
    return ronQuote;
  }
  
  static async ronQuoteId(id) {
    //send text
    // await sendSms(
    //   process.env.ORDER_HANDLER_NUMBER,
    //   `An Quote received for ${id}`
    // );
  
    //store the order
   
    const ronQuote = await Quote.selectId();
    return ronQuote;
  }

  static async patchRonQuote(id, quantity) {
    //send text
    // await sendSms(
    //   process.env.ORDER_HANDLER_NUMBER,
    //   `An Quote change for ${id}`
    // );

    //store the order
    const ronQuote = await Quote.patchId(id, quantity);

    return ronQuote;
  }

  static async deleteRonQuote(id, quantity) {
    //send text
    // await sendSms(
    //   process.env.ORDER_HANDLER_NUMBER,
    //   `An Quote change for ${id}`
    // );

    //store the order
    const ronQuote = await Quote.deleteId(id, quantity);

    return ronQuote;
  }
}
