export type NotAsked = { type: 'notAsked' };

export type Loading<P> = { type: 'loading', params?: P };

export type Loaded<D> = { type: 'loaded', data: D };

export type Failed<E> = { type: 'failed', error: E };