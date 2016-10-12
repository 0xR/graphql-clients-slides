it('works with both jasmine and chai', () => {
  expect({ a: 1 }).to.deep.equal({ a: 1 });
  expect({ a: 1 }).toEqual({ a: 1 });

  expect({ a: 1 }).toMatchSnapshot();
});
