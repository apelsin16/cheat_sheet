useEffect(() => {
    const controller = new AbortController(); // створюємо контролер
  
    fetch('/api/data', { signal: controller.signal })
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.error(err);
        }
      });
  
    return () => controller.abort(); // скасування запиту при розмонтуванні
  }, []);