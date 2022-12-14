import { Envelope, Key } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Logo } from './Logo';
import './styles/global.css';

export const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center justify-center">
        <Logo />
        <Heading size="lg" className="-mt-8">
          Nance
        </Heading>
        <Text size="lg" className="text-gray-400">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col items-stretch w-full max-w-sm mt-10 gap-4">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Key />
            </TextInput.Icon>
            <TextInput.Input
              id="password"
              type="password"
              placeholder="••••••••"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Manter acesso por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="xs" className="text-gray-400 hover:text-gray-200">
          <a href="#" className="underline">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="xs" className="text-gray-400 hover:text-gray-200">
          <a href="#" className="underline">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
};
