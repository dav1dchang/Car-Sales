export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const addFeature = (newFeature) => {
    return { type: 'ADD_FEATURE', payload: newFeature }
}

export const removeFeature = (featureId) => {
    return { type: 'REMOVE_FEATURE', payload: featureId }
}