export async function fetchData<T>(url: string): Promise<T | null> {
    try {
    const res = await fetch(url, { cache: "no-cache" })
    return res.json()
  } catch (err) {
    console.error('Fetch error:', err)
    return null
  }
}