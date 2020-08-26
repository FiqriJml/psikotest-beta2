export const selectTestList = state => state.firestore.ordered.tests
export const selectBabList = state => state.firestore.ordered.babsoal
export const selectBabsoalById = (state, babId) => {
  const list = state.firestore.ordered.babsoal
  if(!list) return
  return list.find(bab => bab.id === babId)
} 
export const selectTestById = (state, testId) => {
  const tests = state.firestore.ordered.tests
  if(!tests) return
  return tests.find(test => test.id === testId)
}