export const requireAuth = async (req: any, res: any, next: any) => {
  req.currentUser = {
    id: "1",
    email: "foo@biz.common",
  };

  next();
};

export const validateRequest = async (req: any, res: any, next: any) => {
  next();
};

export const errorHandler = async (err: any, req: any, res: any, next: any) => {
  next();
};

export class NotFoundError extends Error {
  constructor() {
    super("Not found");
  }
}
