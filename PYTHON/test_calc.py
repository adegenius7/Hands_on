import unittest
import calc_1


class TestCalc(unittest.TestCase):

    def test_add(self):
        result = calc_1.add(10, 5)
        self.assertEqual(result, 15)
        self.assertGreater(result, 10)


if __name__ == '__main__':
    unittest.main()