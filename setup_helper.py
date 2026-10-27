import os
import shutil

src_dir = r'd:\landing page sortpi\sortpi-app'
dst_dir = r'd:\landing page sortpi'

def move_files():
    if not os.path.exists(src_dir):
        print(f"Source dir {src_dir} does not exist yet.")
        return False
    print("Moving files from sortpi-app to root...")
    for item in os.listdir(src_dir):
        s = os.path.join(src_dir, item)
        d = os.path.join(dst_dir, item)
        if os.path.exists(d):
            if os.path.isdir(d):
                shutil.rmtree(d)
            else:
                os.remove(d)
        shutil.move(s, d)
    try:
        os.rmdir(src_dir)
        print("Removed sortpi-app directory.")
    except Exception as e:
        print("Could not remove sortpi-app dir:", e)
    print("Done moving! Files in root:")
    print(os.listdir(dst_dir))
    return True

if __name__ == "__main__":
    move_files()
