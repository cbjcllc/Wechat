export interface BaseState<T> {
  byId: {
    [uuid: string]: T
  }
  allIds: string[]
}

export interface BaseModel {
  uuid: string
  type: string
}

export const getEmptyState = <T>() =>
  ({
    byId: {},
    allIds: [],
  } as BaseState<T>)

export const update =
  <T>() =>
  (
    state: BaseState<T>,
    {
      payload: { uuid, model },
    }: { payload: { uuid: string; model: BaseModel } }
  ) => ({
    ...state,
    byId: {
      uuid: {
        ...state.byId[uuid],
        model,
      },
    },
  })

export const create =
  <T>() =>
  (
    state: BaseState<T>,
    {
      payload: { uuid, model },
    }: { payload: { uuid: string; model: BaseModel } }
  ) => ({
    ...state,
    byId: {
      [uuid]: model,
    },
    allIds: [...state.allIds, uuid],
  })

export const del =
  <T>() =>
  (
    state: BaseState<T>,
    { payload: { uuid } }: { payload: { uuid: string } }
  ) => ({
    ...state,
    byId: {
      [uuid]: undefined,
    },
    allIds: state.allIds.filter(id => id !== uuid),
  })
