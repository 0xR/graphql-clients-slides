it('works with chai', () => {
  expect({ a: 1 }).to.deep.equal({ a: 1 });
  expect({ a: 1 }).not.to.deep.equal({ a: 2 });

  const spy = sinon.spy();
  expect(spy).not.to.have.been.calledWith();
  spy();
  expect(spy).to.have.been.calledWith();
});

it('works with jasmine', () => {
  jasmineExpect({ a: 1 }).toEqual({ a: 1 });
  jasmineExpect({ a: 1 }).not.toEqual({ a: 2 });

  const spy = jest.fn();
  jasmineExpect(spy).not.toHaveBeenCalled();
  spy();
  jasmineExpect(spy).toHaveBeenCalled();
});
