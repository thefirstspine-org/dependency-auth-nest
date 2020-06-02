
# 📦 dependency-auth-nest // @thefirstspine/auth-nest

Built on top of <https://github.com/thefirstspine/dependency-auth|@thefirstspine/auth>. Provides Nest services & guard.

## Install

```bash
npm i @thefirstspine/auth-nest@latest
```

## Configuration

The configuration is the same as <https://github.com/thefirstspine/dependency-auth|@thefirstspine/auth> module.

## Documentation

### AuthService

Nest service to check auth context from the Auth net service.

#### me

Validates a JWT to the auth platform service.

**Synopsis:** `async  me(jwt: string): Promise<number|null>`

**Params:**

- `jwt: string` The JWT to send to the auth net service.

### AuthGuard

Guard to filter incoming requests that are intend to be signed with a JWT under the `Authorization` HTTP header. Pass the validation when the provided JWT is present & valid in the auth net service.

## How to use

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Publish on NPM

```bash
npm publish
```

## License

TFS Platform is NOT licensed. You are free to download, view, run the repository. You are NOT allowed to redistribute this project for both commercial and non-commercial use. Deal with it.
