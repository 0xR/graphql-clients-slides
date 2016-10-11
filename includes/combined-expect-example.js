it('works with both jasmine and chai', () => {
  expect({ a: 1 }).to.deep.equal({ a: 1 });
  expect({ a: 1 }).toEqual({ a: 1 });

  const spy = sinon.spy();
  expect(spy).not.to.have.been.calledWith();

  const spy = jest.fn();
  jasmineExpect(spy).not.toHaveBeenCalled();

  expect({ a: 1 }).toMatchSnapshot();
});
