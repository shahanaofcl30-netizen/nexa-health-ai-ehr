export async function summarizeClinicalNote(note){
  // Mock AI service: echo with a mock summary
  return Promise.resolve({
    summary: `Summary (mock): ${note.slice(0,120)}${note.length>120? '...':''}`
  })
}

export async function generateDiagnosis(prompt){
  return Promise.resolve({ diagnosis: 'Hypertension (mock)', confidence: 0.86 })
}
