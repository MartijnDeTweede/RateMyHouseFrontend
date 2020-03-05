
export const handleApiResponse = async (response: Response) => {
  if(response.status === 204) {
    return {
      message: "No content found"
    }
  };

  if(response.status !== 200) {
    const innerresponse = await response.json();
    throw({...innerresponse});
  };
  return response.json()
}