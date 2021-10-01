import { Router } from 'express';
// const { fetch } = require('node-fetch');
import smsService from '../services/smsService';
// const { fetchURL, URL } = require('../utils/fetchUtils');


export default Router()
  .post('/', async (req, res, next) => {
    console.log('hello', req.body);
    try {
      const quote = await smsService.createRonQ(req.body);
      res.send(quote);
    } catch (err) {
      next(err);
    }
  })

  .get('/', async (req, res, next) => {
    try {
      const quote =  await smsService.ronQuotes(req.body);
      res.send(quote);
    } catch (err) {
      next(err);
    }
  })
  
  .get('/:id', async (req, res, next) => {
    try {
      const quote = await smsService.ronQuoteId(req.body);
      res.send(quote);
    } catch (err) {
      next(err);
    }
  })

  .patch('/:id', async (req, res, next) => {
    try {
    
      const quote = await smsService.patchRonQuote(req.body);
      res.send(quote);
    } catch (err) {
      next(err);
    }
  })

  .delete('/:id', async (req, res, next) => {
    try {
    
      const quote = await smsService.deleteRonQuote(req.body);
      res.send(quote);
    } catch (err) {
      next(err);
    }
  });
