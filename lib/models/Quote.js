import pool from '../utils/pool';

export default class Quote {
  quote;

  constructor(row) {
    this.quote = row.quote;  
  }

  static async insert({quote}) {
    const {rows} = await pool.query(
      'INSERT INTO quotes (quote) VALUES ($1) RETURNING *',
      [quote]
    );
    return new Quote(rows[0]);
  }

  static async select() {
   const { rows } = await pool.query(
     'SELECT * FROM quotes'
   );
   return rows.map((row) => new Quote(row));
  }

  static async selectId() {
    const { rows } = await pool.query(
      'SELECT quote FROM quotes'
    );
    return new Quote(rows[0]);
  }

  static async patchId(quote) {
    const { rows } = await pool.query(
      `UPDATE quotes
      SET
        quote=$1
       RETURNING *`,
      [quote]
    );
    return new Quote(rows[0]);
  }

  static async deleteId(quote) {
    const { rows } = await pool.query(
      `DELETE FROM quotes
        WHERE quote = $1`,
      [quote]
    );
    return rows[0];
  }
};