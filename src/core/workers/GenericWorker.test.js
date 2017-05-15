import GenericWorker from './GenericWorker';

class SuccessType {

}

class FailingType {

}

describe('The Generic Worker', () => {
  it('should be created with a type and no checkers', () => {
    const worker = new GenericWorker(SuccessType);
    expect(worker.type).toBe(SuccessType);
    expect(worker.checkers).toEqual([]);
  });

  it('should error if created with no type', () => {
    expect(() => ( new GenericWorker()))
      .toThrow(new Error('Type must be specified when creating an instance of GenericWorker'))
  });

  it('should allow a checker with a known type to be registered', () => {
    const worker = new GenericWorker(SuccessType);
    const expected = new SuccessType();
    worker.register(expected);
    const actual = worker.checkers[0];
    expect(actual).toBe(expected);
  });

  it('should throw an error when an unknown checker is registered', () => {
    const worker = new GenericWorker(SuccessType);
    expect(() => (worker.register(new FailingType())))
      .toThrow(new Error('Failed to register checker as type was not expected'));
  });

});
