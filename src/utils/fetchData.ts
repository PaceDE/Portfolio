export async function fetchData<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, { next: { revalidate: 60 } })
    return res.json()
  } catch (err) {
    console.error('Fetch error:', err)
    return null
  }
}