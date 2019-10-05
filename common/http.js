import fetch from "isomorphic-unfetch";

export const saveContact = async data => {
  try {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    };
    const response = await fetch("/api/contacts", options);
    const json = await response.json();
    console.log(response);
    console.log(json);
    if (response.status === 200) {
      setTimeout(() => {
        alert(`Successfully submitted form: ${JSON.stringify(json)}`);
        // window.location.href = "/#contact";
        location.reload();
      }, 400);
    } else {
      setTimeout(() => {
        alert(`Error: ${JSON.stringify(json)}`);
        location.reload();
      }, 400);
    }
    return response;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const saveVolunteer = async data => {
  try {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    };
    const response = await fetch("/api/volunteers", options);
    const json = await response.json();
    console.log(response);
    console.log(json);
    if (response.status === 200) {
      setTimeout(() => {
        alert(`Successfully submitted form: ${JSON.stringify(json)}`);
        location.reload();
      }, 400);
    } else {
      setTimeout(() => {
        alert(`Error: ${JSON.stringify(json)}`);
        location.reload();
      }, 400);
    }
    return response;
  } catch (error) {
    console.error("Error: ", error);
  }
};

export const savePartner = async data => {
  try {
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    };
    const response = await fetch("/api/partners", options);
    const json = await response.json();
    console.log(response);
    console.log(json);
    if (response.status === 200) {
      setTimeout(() => {
        alert(`Successfully submitted form: ${JSON.stringify(json)}`);
        location.reload();
      }, 400);
    } else {
      setTimeout(() => {
        alert(`Error: ${JSON.stringify(json)}`);
        location.reload();
      }, 400);
    }
    return response;
  } catch (error) {
    console.error("Error: ", error);
  }
};
