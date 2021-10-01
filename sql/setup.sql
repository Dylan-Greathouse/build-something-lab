DROP TABLE IF EXISTS quotes;

CREATE TABLE quotes (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  quote TEXT NOT NULL
);

INSERT INTO quotes (quote)
  VALUES ('I will leave my children $50 a piece. Enough for the cab ride home from the funeral and a steak dinner. End of discussion.');
  