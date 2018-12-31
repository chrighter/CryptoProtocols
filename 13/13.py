import psutil

def factorial(n):
    if n == 0:
        return 1
    else:
        factorial_value = n * factorial(n-1)
        computer_load = psutil.cpu_percent(1)
        print('Computer load is ', psutil.cpu_percent(1))
        print('factorial value: ', factorial_value)

        if computer_load > 2:
            print('Computer load too high: ', computer_load)
            print('Current factorial value is ', factorial_value)
            print('Sorry, but your program will be stopped')
            exit()

        return factorial_value

def main():
    factorial(5)

if __name__ == '__main__':
    main()
