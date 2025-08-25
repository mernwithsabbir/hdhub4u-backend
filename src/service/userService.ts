// ! Role : Admin Manage Functionality
export const deleteUserService = async (id: string) => {
  try {
    return id;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Delete User!");
  }
};

// ? Role : User Manage Functionality
export const getSingleUserService = async (id: string) => {
  try {
    return id;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Get Single User!");
  }
};
export const updateUserService = async (id: string) => {
  try {
    return id;
  } catch (error) {
    const message = error instanceof Error && error.message;
    throw new Error(message || "Field To Update User!");
  }
};
